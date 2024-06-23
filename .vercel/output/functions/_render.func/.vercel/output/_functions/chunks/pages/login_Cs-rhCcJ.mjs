/* empty css                          */
import { c as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_DpERy_Um.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './_orderId__DMOTsGqi.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      if (response.ok) {
        window.location.href = "/admin";
      } else {
        const result = await response.json();
        setError(result.message);
      }
    } catch (error2) {
      console.error("Login error:", error2);
      setError("akun tidak ditemukan");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto p-4 pt-6 bg-white rounded shadow-md", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Login" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-gray-700 text-sm font-bold mb-2",
            htmlFor: "email",
            children: "Email"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "block w-full p-2 pl-10 text-sm text-gray-700",
            id: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx(
          "label",
          {
            className: "block text-gray-700 text-sm font-bold mb-2",
            htmlFor: "password",
            children: "Password"
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            className: "block w-full p-2 pl-10 text-sm text-gray-700",
            id: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded",
          children: "Submit"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-sm mt-2", children: error })
  ] });
};

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-center items-center h-screen"> ${renderComponent($$result2, "LoginForm", Login, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/components/adminPage/Login.jsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/login.astro", void 0);

const $$file = "C:/Users/ogaa/Desktop/project-kp/project-jima-coffee/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
