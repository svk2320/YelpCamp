import Checkmark from "../assets/Checkmark.svg";

const Checkmarks = ({feature}) => {
  return (
    <div class="flex items-center my-2">
        <img src={Checkmark} alt="Checkmark" class="mr-2" />
        <span>{feature}</span>
    </div>
  )
}

export default Checkmarks