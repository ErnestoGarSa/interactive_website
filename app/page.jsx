import classes from "./page.module.css";

const page = () => {
  return (
    <>
      <main className={`container ${classes.container_content}`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className={`text-center mt-5 ${classes.title} `}>
            Mastering the web with JavaScript, React and Next.js
          </h1>
          <p className="container fs-3 ">
            Welcome to my personal web project, where I share what I can do with
            JavaScript, React, and Next.js.
          </p>
          <p className="container fs-3">
            Here, you’ll see how these technologies come together to build
            modern, dynamic, and user-friendly web apps.
          </p>
          <p className="container fs-3">
            Everything’s designed to feel smooth — with clean transitions,
            intuitive interfaces, and solid performance.
          </p>
          <p className="container fs-3">
            It’s a simple way to show how I use these tools to create
            functional, up-to-date websites.
          </p>
        </div>
      </main>
    </>
  );
};

export default page;
