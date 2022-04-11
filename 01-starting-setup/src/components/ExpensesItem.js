import './ExpensesItem.css';

function ExpensesItem(){
    const expenseDate = new Date(2022, 4, 6);
    const expenseTitle = 'Peak Pro';
    const expenseAmount = 489.97;
    //JSX Syntax (javascript xml)
    return (
        <div className="expense-item"> 
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpensesItem;