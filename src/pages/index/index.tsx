import Styles from './index.module.scss'
import InputBox from './InputBox';
import ListBox from './ListBox';

function TodoList() {
  return (
    <div className={`mx-auto ${Styles.todo_list}`}>
      <InputBox></InputBox>
      <ListBox></ListBox>
    </div>
  );
}

export default TodoList;
