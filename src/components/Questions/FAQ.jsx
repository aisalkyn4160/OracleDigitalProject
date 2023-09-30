import { useState } from "react";
import { FaqBox, FaqItems, FaqList, DropDown, Wrap } from "./FAQStyles";

export const Data = [
  {
    id: 1,
    question:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?",
    answer:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 2,
    question:
      "Urna tempus adipiscing quis est sapien in blandit?",
    answer:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 3,
    question:
      " Erat ultrices feugiat pellentesque consectetur nibh elementum?",
    answer:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 4,
    question:
      "Felis id tincidunt pulvinar ac nunc ut nec ornare eget?",
    answer:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },

];
export const Data2 = [
  {
    id: 5,
    question:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?",
    answer:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 6,
    question:
      "Cras sit semper at viverra porta. Tellus in risus purus ornare?",
    answer:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 7,
    question:
      "Condimentum ut magna id tortor amet consectetur?",
    answer:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
  {
    id: 8,
    question:
      "Orci a vitae ut fringilla lacus. At vel dapibus orci elementum ac at?",
    answer:
      "Congue nullam molestie sit consectetur commodo mi elit viverra in. Turpis porttitor eget in quis aliquam. Senectus non nisi odio curabitur nisl viverra odio. Sit nunc purus tortor sapien. Maecenas eget tellus massa consectetur. Etiam leo luctus etiam vel. Vulputate varius elit nibh tortor id interdum interdum tellus.",
  },
];

export const FAQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    console.log(id);
    setClicked(id);
  };

  return (
    <FaqBox>
      <FaqList>
        {Data.map((it) => {
          return (
              <FaqItems key={it.id}>
                <Wrap onClick={() => toggle(it.id)} >
                  <span>{clicked === it.id ? "-" : "+"}</span> <h5>  {it.question}</h5>
                </Wrap>
                {clicked === it.id ? (
                  <DropDown>
                    <p>{it.answer}</p>
                  </DropDown>
                ) : null}
              </FaqItems>
          );
        })}
      </FaqList>
      <FaqList>
        {Data2.map((it) => {
          return (
              <FaqItems key={it.id}>
                <Wrap onClick={() => toggle(it.id)} >
                  <span>{clicked === it.id ? "-" : "+"}</span> <h5>{it.question}</h5>
                </Wrap>
                {clicked === it.id ? (
                  <DropDown>
                    <p>{it.answer}</p>
                  </DropDown>
                ) : null}
              </FaqItems>
          );
        })}
      </FaqList>
    </FaqBox>
  );
};
