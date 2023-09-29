import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from "./pages/components/Header";
import Footers from "./pages/components/Footer";
import Main from "./pages/components/Home";
import { users } from "./models/db";

class App extends Component {
  handleDelete(index: number) {
    users.splice(index, 1);
    console.log(users);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-uppercase mb-0">
                    MANAGER USER
                  </h5>
                </div>
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium pl-4"
                        />
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Work
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Dateofbirth
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Manage
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr>
                          <td className="pl-4">1</td>
                          <td>
                            <h6 className="font-medium mb-0">{user.name}</h6>
                          </td>
                          <td>
                            <span className="text-muted">{user.email}</span>
                          </td>
                          <td>
                            <span className="text-muted">{user.work}</span>
                            <br />
                          </td>
                          <td>
                            <span className="text-muted">{user.DoB}</span>
                            <br />
                          </td>
                          <td>
                            <select
                              className="form-control category-select"
                              id="exampleFormControlSelect1"
                            >
                              <option>Modulator</option>
                              <option>Admin</option>
                              <option>User</option>
                              <option>Subscriber</option>
                            </select>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                            >
                              <i className="fa fa-trash" />{" "}
                            </button>
                            <button
                              onClick={() => this.handleDelete(index)}
                              type="button"
                              className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                            >
                              <i className="fa fa-edit" />{" "}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
