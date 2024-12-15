import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    id: 1,
    question: "What is Treal?",
    answer:
      "Treal is a personalized nutrition tracking app that helps you achieve your health goals. It offers a comprehensive database of nutrients, including calories, macros, and water intake, to help you make informed choices about your diet.",
  },
  {
    id: 2,
    question: "How do I get started?",
    answer:
      "To get started, simply sign up for an account on the Treal website. Once you're logged in, you can start tracking your nutrition and setting goals. You can also connect your Treal account to your Google Fit account to sync your data.",
  },
  {
    id: 3,
    question: "What types of nutrients does the app track?",
    answer:
      "Our app tracks macronutrients (carbohydrates, protein, and fat), as well as micronutrients (vitamins and minerals).",
  },
  {
    id: 4,
    question:
      "How does the app's analytics feature help me understand my nutrition?",
    answer:
      "Our analytics provide personalized insights into your nutrient intake, identifying patterns, and suggesting improvements for a balanced diet.",
  },
  {
    id: 5,
    question: "Can I customize water intake notifications?",
    answer:
      "Yes, set your hydration goals and customize reminders to drink water throughout the day, ensuring you stay hydrated and on track.",
  },
  {
    id: 6,
    question:
      "Does the app integrate with wearable devices to track physical activity?",
    answer:
      "No, our app currently does not integrate with wearable devices for physical activity tracking, but we're working on adding this feature in future updates.",
  },
  {
    id: 7,
    question: "Is my personal data and health information secure?",
    answer:
      "Absolutely! Our app follows strict data protection policies and encryption to safeguard your sensitive information.",
  },
];

export default function FAQ() {
  return (
    <div className=" flex flex-col items-center justify-center gap-10 min-h-screen">
      <div>
        <h1 className="text-center sm:text-5xl text-2xl font-bold sm:scale-y-125 sm:scale-x-125 text-gray-800">
          Frequently Asked Questions
        </h1>
      </div>
      <Accordion
        type="single"
        collapsible
        className="sm:w-[50%] w-[80%] border-2 border-gray-300 rounded-xl p-5 shadow-md"
      >
        {questions.map((question) => (
          <AccordionItem
            value={question.id as unknown as string}
            key={question.id}
            className="transition-all duration-500"
          >
            <AccordionTrigger className="text-md sm:text-lg" >
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-md" >{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
