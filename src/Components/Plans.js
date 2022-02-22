import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { useState } from "react";

// This component contains the Plan section

const Plans = () => {
  const [activeIndex, setActiveIndex] = useState(0); //useState is helpiing to active the card and changing state

  // A handletabChange function which comes to play when we change the tab of plan
  const handleTabChange = (i) => {
    setActiveIndex(i);
  };

  const plans = [
    {
      title: "1 Month Pack (4 tubes)",
      discount: 27,
      price: 795
    },
    {
      title: "3 Month Pack (12 tubes)",
      discount: 12,
      price: 999
    }
  ];

  return (
    <>
      {plans.map((plan, i) => (
        <div
          className={
            activeIndex === i ? "container card active" : "container card" //checking by ternary opearator
          }
          key={i}
          onClick={() => handleTabChange(i)}
        >
          <div className="flex justify-between align-center">
            <div>
              {i === 0 && (
                <div className="tag">
                  <BsStarFill /> Most Popular <BsStarFill />
                </div>
              )}
              <h3>{plan.title}</h3>

              {/* Here I am adding functionality , that according to the price and discount the saving % get changed , dynamically we are doing this , i am not putting normally static values */}
              <p className="text-muted">
                savings: ₹{parseInt(plan.price * (plan.discount / 100), 10)}
              </p>
              <p className="text-success">
                {plan.discount}% saved{" "}
                {i === 0 && (
                  <span className="text-orange ml-1">Best Results</span>
                )}
              </p>
            </div>
            <div>
              <h2>
                ₹{parseInt(plan.price - plan.price * (plan.discount / 100), 10)}
              </h2>

              {/* (CSS) class text muted helping us to make the color light of that container when we change the tab */}
              <h2 className="text-muted">
                <del> ₹{plan.price}</del>
              </h2>
            </div>
          </div>
          {/* here using ternary opeartor we say .. if this happens so do this  (right check)  otherwise run the second condition(Empty string0) */}
          <div className="ml-1">
            {activeIndex === i ? <AiOutlineCheck /> : " "}
          </div>
        </div>
      ))}
    </>
  );
};

export default Plans;
