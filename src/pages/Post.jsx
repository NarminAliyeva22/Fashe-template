import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import PhotoLink from "./PhotoLink";
import { Footer } from "./Features";
import { ALL_POSTS, LONG_TEXT } from "./postsData";
import "./Post.css";

const AUTHOR_IMG = "";

const INITIAL_COMMENTS = [
  { id: 1, name: "Jessica Brown", date: "March 9, 2017", time: "2:54 pm", text: "Love this wonderful idea!! Thanks for sharing!", img: "", reply: false },
  { id: 2, name: "Adam Brown", date: "March 9, 2017", time: "2:54 pm", text: "That turned out really cool. I think I'll have to try that one. Thanks", img: "", reply: true },
  { id: 3, name: "Cindy Jefferson", date: "March 9, 2017", time: "2:55 pm", text: "I've been looking for this for a very long time. I Finally Found It!", img: "", reply: false },
];

function Avatar({ src, name, className }) {
  return src ? (
    <img className={className} src={src} alt={name} />
  ) : (
    <div className={`${className} ph`}>{name[0]}</div>
  );
}

export default function Post() {
  const { id } = useParams();
  const post = ALL_POSTS.find((p) => String(p.id) === id);

  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [form, setForm] = useState({ name: "", email: "", text: "", agree: false });

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!post) {
    return (
      <>
        <div className="post-wrap">
          <h1 className="post-title">Post tapılmadı</h1>
          <Link to="/features">← Geri qayıt</Link>
        </div>
        <Footer />
      </>
    );
  }

  const related = ALL_POSTS.filter((p) => p.id !== post.id).slice(0, 2);
  const canSend = form.name.trim() && form.email.trim() && form.text.trim() && form.agree;

  const submit = (e) => {
    e.preventDefault();
    if (!canSend) return;
    const now = new Date();
    setComments([
      ...comments,
      {
        id: Date.now(),
        name: form.name.trim(),
        date: now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        time: now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }).toLowerCase(),
        text: form.text.trim(),
        img: "",
        reply: false,
      },
    ]);
    setForm({ name: "", email: "", text: "", agree: false });
  };

  return (
    <>
      <article className="post-wrap">
        <div className="post-meta">
          <span className="chip"><b>{comments.length}</b> Comments</span>
          <span className="chip">Beauty</span>
          <span className="chip">Lifestyle</span>
          <span className="chip">Popular</span>
        </div>

        <h1 className="post-title">{post.title}</h1>

        <div className="post-cover" style={post.img ? { backgroundImage: `url(${post.img})` } : undefined}>
          <div className="date-badge"><b>{post.day}</b><span>{post.month}</span></div>
        </div>

        {LONG_TEXT.map((t, i) => <p className="post-text" key={i}>{t}</p>)}

        <div className="post-foot">
          <div>
            <p><span className="lbl">Tags:</span> dresses, fashionable, girl, jewelry</p>
            <p><span className="lbl">Author:</span> by Martha Stewart</p>
          </div>
          <div className="share">
            {["X", "f", "t", "p", "✉"].map((s) => <a key={s} href="#">{s}</a>)}
          </div>
        </div>

        <div className="author-box">
          <Avatar className="author-img" src={AUTHOR_IMG} name="Martha Stewart" />
          <div>
            <small>About author</small>
            <h3>Martha Stewart</h3>
            <p>Lorem ipsum dolor sit amet, ne vel falli errem semper. Modo disputationi has no. Elit delenit mel cu, eu exerci principes est, ei assum possit electram vix. Ei convenire consulatu duo, debitis vocibus ei sit.</p>
          </div>
        </div>

        <h2 className="sec-title">You May Also Like</h2>
        <div className="related">
          {related.map((r) => (
            <div key={r.id} className="rel-item">
              <PhotoLink post={r} className="rel-img" />
              <small>{r.date}</small>
              <h4><Link to={`/post/${r.id}`}>{r.title}</Link></h4>
            </div>
          ))}
        </div>

        <h2 className="sec-title">{comments.length} Comments</h2>
        <ul className="comments">
          {comments.map((c) => (
            <li key={c.id} className={c.reply ? "comment reply" : "comment"}>
              <Avatar className="c-img" src={c.img} name={c.name} />
              <div>
                <p className="c-head">
                  by <span className="accent">{c.name}</span> <i>|</i> Posted{" "}
                  <span className="accent">{c.date}</span> <i>|</i> {c.time}
                </p>
                <p className="c-text">{c.text}</p>
                <button className="c-reply" type="button">Reply</button>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="sec-title">Add Your Comment</h2>
        <form className="c-form" onSubmit={submit}>
          <input placeholder="Your Name *" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Your E-mail *" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea placeholder="Your Comment *" value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })} />
          <label className="agree">
            <input type="checkbox" checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })} />
            I agree that my submitted data is being collected and stored. For further details on handling user data, see our <a href="#">Privacy Policy</a>
          </label>
          <button type="submit" disabled={!canSend}>Add comment</button>
        </form>
      </article>
      <Footer />
    </>
  );
}