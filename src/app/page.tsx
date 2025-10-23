
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
return(
  <div className="p-4">
    <p className="text-6xl font-stretch-extra-condensed pb-2">
      HELLO WORLD
    </p>
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant="elevated">I am button</Button>
      </div>
       <div>
        <Input placeholder="I am input box"></Input>
      </div>
       <div>
        <Progress value={50}/>
      </div>
       <div>
        <Textarea value="i am text area"></Textarea>
      </div>
      <div>
        <Checkbox></Checkbox>
      </div>
    </div> 


  </div>
);
}
