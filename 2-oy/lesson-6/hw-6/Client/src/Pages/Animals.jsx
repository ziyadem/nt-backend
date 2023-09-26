import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { toast } from "react-toastify";
const Animals = () => {
  let tokenId = localStorage.getItem("token");
  let [course, useCourse] = useState([]);
  let [del, useDel] = useState(0);
  let [upd, useUpd] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/animals", {
      method: "GET",
      headers: {
        "Copntent-Type": "application/json",
        token: tokenId,
      },
    })
      .then((res) => res.json())
      .then((data) => useCourse(data));
  }, [del]);

  const deleteCourse = async (course_id) => {
    await fetch(`http://localhost:5000/animals/${course_id}`, {
      method: "DELETE",
      headers: {
        "Copntent-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        useDel(Math.random() * (1000 - 1) + 1);
        console.log(Math.random() * (1000 - 1) + 1);
        toast(data.msg, { type: "success" });
      })
      .catch((err) => console.log(err));
  };
  const updateCourse = async (e) => {
    e.preventDefault();
    let { title, color } = e.target;
    await fetch(`http://localhost:5000/animals/${upd.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title.value,
        color: color.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          return toast(data.msg, { type: "error" });
        }
        toast(data.msg, { type: "success" });
        useDel(Math.random() * (1000 - 1) + 1);
        console.log(Math.random() * (1000 - 1) + 1);
        title.value = "";
        color.value = "";
      })
      .catch((err) => console.log(err));
  };
  const createCourse = async (e) => {
    e.preventDefault();
    let { title, color } = e.target;
    await fetch(`http://localhost:5000/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title: title.value,
        color: color.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.msg, { type: "success" });
        useDel(Math.random() * (1000 - 1) + 1);
        title.value = "";
        color.value = "";
      })
      .catch((err) => console.log(err));
    console.log(123);
  };

  return (
    <>
      <Header />

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Update Animals
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={(e) => updateCourse(e)}>
              <div class="modal-body">
                <div>
                  <label htmlFor="title">Title: </label> <br />
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder={upd.title}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price:</label> <br />
                  <input
                    type="text"
                    name="color"
                    id="color"
                    placeholder={upd.color}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Create Animals
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={(e) => createCourse(e)}>
              <div class="modal-body">
                <div>
                  <label htmlFor="title">Title: </label> <br />
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder={upd.title}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price:</label> <br />
                  <input
                    type="text"
                    name="color"
                    id="color"
                    placeholder={upd.color}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section className="container courses">
        <h2 className="text-center pt-3 pb-3 fs-1">Animals</h2>
        <div className="create-course">
          <button
            className="btn btn-danger "
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Create animals
          </button>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>color</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {course &&
              course.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.title}</td>
                  <td>{c.color}</td>
                  <td>
                    <i
                      className="fa fa-edit text-primary me-3"
                      style={{ cursor: "pointer" }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        useUpd({ id: c.id, title: c.title, color: c.color });
                      }}
                    ></i>
                    <i
                      className="fa fa-trash text-danger "
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteCourse(c.id)}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Animals;
