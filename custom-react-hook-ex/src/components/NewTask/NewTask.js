import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const NewTask = (props) => {
  const createTask = (taskText, task) => {
    const generatedId = task.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    
    props.onAddTask(createdTask);
  };
  const {isLoading, error, sendRequest: postTask} = useHttp()

  const enterTaskHandler = async (taskText) => {
    postTask({
      url: 'https://react-practice-5c75e-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: { text: taskText},
      headers: {'Content-Type': 'application/json'}
    }, createTask.bind(null, taskText))
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
