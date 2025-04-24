import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

function Home() {
  return (
    <div>
      <h1>Employee Management System</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}

export default Home;

