import Button from "@/components/button";

export default function Page() {
  return (
    <div className="m-20">
      <Button onClick={() => console.log("hi")}>Hey there!</Button>
    </div>
  );
}
