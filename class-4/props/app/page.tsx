import Student from "@/components/student";

export default function Home() 
{
  const name:string = "Ali";
  const age:number = 30;
  const salary:number = 100000;

    return (

        <Student name={name} age={age} salary={salary} />

    );
}