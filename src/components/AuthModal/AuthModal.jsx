import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Unlock, UserPlus, X, Eye, EyeOff } from "lucide-react";
import "./AuthModal.css";

function Field({ label, type = "text", value, onChange, name, autoComplete }) {
  const [show, setShow] = useState(false);
  const id = useId();
  const isPassword = type === "password";

  return (
    <div className="auth-field">
      <input
        id={id}
        name={name}
        type={isPassword && show ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        autoComplete={autoComplete}
      />
      <label htmlFor={id}>{label} <sup>*</sup></label>
      {isPassword && (
        <button
          type="button"
          className="auth-eye"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={17} /> : <Eye size={17} />}
        </button>
      )}
    </div>
  );
}

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({
    login: "", password: "", remember: false,
    regName: "", regEmail: "", regPassword: "",
  });

  const set = (key) => (e) =>
    setForm((f) => ({
      ...f,
      [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const submitLogin = (e) => {
    e.preventDefault();
    console.log("Login:", form.login, form.remember); // bura backend qoşulacaq
    onClose();
  };

  const submitRegister = (e) => {
    e.preventDefault();
    console.log("Register:", form.regName, form.regEmail); // bura backend qoşulacaq
    onClose();
  };

  return createPortal(
    <div className="auth-overlay" onMouseDown={onClose}>
      <div
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${tab === "login" ? "active" : ""}`}
            onClick={() => setTab("login")}
          >
            <Unlock size={18} /> LOGIN
          </button>
          <button
            type="button"
            className={`auth-tab ${tab === "register" ? "active" : ""}`}
            onClick={() => setTab("register")}
          >
            <UserPlus size={18} /> REGISTER
          </button>
          <button type="button" className="auth-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="auth-body">
          {tab === "login" ? (
            <form onSubmit={submitLogin}>
              <Field label="Login" name="login" value={form.login} onChange={set("login")} autoComplete="username" />
              <Field label="Password" name="password" type="password" value={form.password} onChange={set("password")} autoComplete="current-password" />

              <div className="auth-row">
                <a href="#forgot" className="auth-forgot">Forgot password?</a>
                <label className="auth-remember">
                  <input type="checkbox" checked={form.remember} onChange={set("remember")} />
                  Remember me
                </label>
              </div>

              <button type="submit" className="auth-submit">LOGIN</button>
            </form>
          ) : (
            <form onSubmit={submitRegister}>
              <Field label="Name" name="regName" value={form.regName} onChange={set("regName")} autoComplete="name" />
              <Field label="E-mail" name="regEmail" type="email" value={form.regEmail} onChange={set("regEmail")} autoComplete="email" />
              <Field label="Password" name="regPassword" type="password" value={form.regPassword} onChange={set("regPassword")} autoComplete="new-password" />

              <button type="submit" className="auth-submit">REGISTER</button>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}