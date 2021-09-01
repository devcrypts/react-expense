import "./ExpenseItem.css";

const ExpenseItem = () => {

    // JSX, ana bir element dondurmeli. Bu yuzden aux kullaniyoruz.
    return (
        <div className="expense-item">
            <div className="ex"> March 28th 2021 </div>
           <div className="expense-item__description">
               <h2> Car Insurance </h2>
               <div className="expense-item__price"> 294.67 </div>
           </div>
        </div>
    );

};

export default ExpenseItem;