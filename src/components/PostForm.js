import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;

    if (!title.trim()) {
      return this.props.showAlert("Введите текст");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
    console.log(newPost);
  };
  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && (
          <div className='alert alert-danger' role='alert'>
            {this.props.alert}
          </div>
        )}

        <div className='form-group'>
          <label htmlFor='title'>Заголовк поста</label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={this.state.title}
            name='title'
            onChange={this.changeInputHandler}
          />
        </div>
        <button className='btn btn-success' type='submit'>
          Добавить
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
