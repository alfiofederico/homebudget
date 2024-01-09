import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          <span className="accent">Your Money</span>
        </h1>
     
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Who are you?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  )
}
export default Intro