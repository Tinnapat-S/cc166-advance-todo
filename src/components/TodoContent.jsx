import styles from './TodoContent.module.scss';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoContent() {
  return (
    <div className={styles.todo__container}>
      <TodoHeader title='Inbox' />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default TodoContent;
