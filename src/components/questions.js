const questions = [
  {
    question: "What elevation would you prefer?",
    answers: [
        {text: "Less than 500ft", value: "1"},
        {text: "500 - 1000ft", value: "2"},
        {text: "More than 1000ft", value: "3"},
    ],
  },
  {
    question: "What type of route would you prefer?",
    answers: [
        {text: "Loop", value: "1"},
        {text: "Out & Back", value: "2"},
        {text: "Point to Point", value: "3"},
    ],
  },
  {
    question: "How long do you want your hike to be?",
    answers: [
        {text: "Less than 5 miles", value: "1"},
        {text: "5 - 10 miles", value: "2"},
        {text: "More than 10 miles", value: "3"},
    ],
  },
  {
    question: "How long would you prefer to hike for?",
    answers: [
        {text: "Less than an hour", value: "1"},
        {text: "1 - 3 hours", value: "2"},
        {text: "More than 3 hours", value: "3"},
    ],
  },
  {
    question: "Would you purchase a Discovery or Northwest Forest Pass ($30 - $35)?",
    answers: [
        {text: "Yes", value: "1"},
        {text: "No", value: "2"},
    ],
  },
];

export default questions;