import {Spinner} from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center top-0 -left-4">
      <Spinner size="lg" color="secondary" />  
    </div>
  ) 
}
