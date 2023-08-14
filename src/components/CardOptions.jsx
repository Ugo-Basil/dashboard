

import React, { useState } from "react";
import cards from "../constants/card";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import Button from "./Button";

const CardOptions = () => {
  const [selectedCardId, setSelectedCardId] = useState(1);

  return (
    <>
      {cards.map((card) => (
        <label
          key={card.id}
          className={`  border rounded flex flex-col justify-between gap-10 w-[100%]  mt-5  ${
            selectedCardId === card.id ? "border-[#D6BBFB] bg-[#F9F5FF] " : ""
          }`}
        >
          <div className="flex justify-between w-full shadow-md p-4">
            <div className="flex">
              <div className="flex">
                <img
                  src={card.img}
                  alt=""
                  className="w-16 h-16 object-contain "
                />
              </div>

              <div className="flex flex-col">
                <p
                  className={`p-3  ${
                    selectedCardId === card.id
                      ? "text-[#53389E]"
                      : "text-[#344054]"
                  } `}
                >
                  {card.type}
                </p>
                <p
                  className={`p-3  ${
                    selectedCardId === card.id
                      ? "text-[#7F56D9]"
                      : "text-[#667085]"
                  } `}
                >
                  Expiry: {card.expiry}
                </p>
                <p
                  className={`p-3  ${
                    selectedCardId === card.id
                      ? "text-[#9E77ED]"
                      : "text-[#667085]"
                  } `}
                >
                  Set as default{" "}
                  <span
                    className={`p-3  ${
                      selectedCardId === card.id
                        ? "text-[#6941C6]"
                        : "text-[#667085]"
                    } `}
                  >
                    Edit
                  </span>
                </p>
              </div>
            </div>
            <input
              type="radio"
              name="selectedCard"
              id={`card-${card.id}`}
              value={card.id}
              className="sr-only"
              checked={selectedCardId === card.id}
              onChange={() =>
                setSelectedCardId(selectedCardId === card.id ? null : card.id)
              }
            />
            <div
              className={`w-6 h-6 border rounded-full flex items-center justify-center ${
                selectedCardId === card.id
                  ? "bg-[#7F56D9] text-white"
                  : "border-[#7F56D9]"
              }`}
            >
              {selectedCardId === card.id && (
                <AiOutlineCheck className="w-4 h-4 " />
              )}
            </div>
          </div>
        </label>
      ))}
      <Button
        icon={<AiOutlinePlus className="mr-2" />}
        label="Add new payment method"
      />
    </>
  );
};

export default CardOptions;
