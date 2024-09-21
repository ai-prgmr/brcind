import Card from "@/components/Card";
import cardData from "./cardData";

export default function Assignments() {
  let corpData = cardData.filter((card) => card.type === "corp");
  let personalData = cardData.filter((card) => card.type === "personal");
  return (
    <section className="w-full reverseGradient mx-auto pb-10">
      <div className="py-2">
        <h2 className="text-2xl font-bold text-center py-4 ">
          Corporate Insolvency
        </h2>
        <div className="flex flex-wrap justify-center">
          {corpData.map((cardItem, index) => (
            <Card key={index} item={cardItem} />
          ))}
        </div>
      </div>
      <div className="my-12 py-3">
        <h2 className="text-2xl font-bold text-center ">Personal Insolvency</h2>
        <div className="flex flex-wrap justify-center">
          {personalData.map((cardItem, index) => (
            <Card key={index} item={cardItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
