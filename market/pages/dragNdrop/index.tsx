import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DATA = {
  plan: [
    {
      id: "plan-1",
      title: "일정1",
      contents: "일정1 내용",
    },
    {
      id: "plan-2",
      title: "일정2",
      contents: "일정2 내용",
    },
    {
      id: "plan-3",
      title: "일정3",
      contents: "일정3 내용",
    },
  ],
};

const LeftBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;
  margin-top: 300px;
`;

export default function PersonalTestDetailPage() {
  const [plans, setPlans] = useState<any>([]);
  useEffect(() => {
    setPlans(DATA.plan);
  }, []);
  const onDragEndReOrder = (result) => {
    // draggable Item 옮기는 동작이 종료되었을 때 실행되는 함수
    const currentPlans = [...plans];
    const startItemIndex = result.source.index;
    const endItemIndex = result.destination?.index;

    const removePlan = currentPlans.splice(startItemIndex, 1);
    console.log("startItemIndex is ", startItemIndex);
    const newPlan = currentPlans.splice(endItemIndex, 0, removePlan[0]);
    console.log("currentPlans is ", currentPlans);
    setPlans(currentPlans);
  };

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: "8px",
    width: 250,
    margin: "10px",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    useSelect: "none",
    padding: "3px",
    margin: `0 0 8px 0`,
    background: isDragging ? "red" : "gray",

    ...draggableStyle,
  });

  return (
    <div>
      <LeftBox>
        <DragDropContext onDragEnd={onDragEndReOrder}>
          <Droppable droppableId="plans">
            {(provided, snapshot) => (
              <ul
                className="plans"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {plans.map((el, index) => {
                  return (
                    <Draggable key={el.id} draggableId={el.id} index={index}>
                      {(provided, snapshot) => (
                        <li
                          key={el.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {el.title}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </LeftBox>
    </div>
  );
}
