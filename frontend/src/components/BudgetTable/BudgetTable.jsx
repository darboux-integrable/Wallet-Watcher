import styles from "./BudgetTable.module.css"
import {createSignal, Show} from "solid-js";
import Input from "../Input/Input";

export default function BudgetTable({budgets}){

    const [currentBudget, setCurrentBudget] = createSignal(budgets[0]);
    const [selectedItem, setSelectedItem] = createSignal(false);

    function calcCurrentAmount(budget){
        let amount = 0;
        budget.items.forEach(item => {
            amount += item.cost * item.amount;
        });

        return amount;
    }

    const [unitPrice, setUnitPrice] = createSignal("");
    const [amount, setAmount] = createSignal("");

    return (

        <div className={styles.content}>
            <div className={styles.leftSide}>
                <div className={styles.leftTopContent}>
                    <h1 className={styles.tableTitle}>Budgets</h1>
                    <div className={styles.budgets}>
                        {budgets.map(budget => {
                            return (
                                <div className={styles.smallBudgetComponent} onclick={() => {setCurrentBudget(budget); setSelectedItem(false)}}>
                                    <h2 className={styles.budgetButtonTitle} style={{"background-color": budgets.indexOf(budget) % 2 == 0 ? "var(--background-color-2)" : "var(--background-color-3)"}}>{budget.title}</h2>
                                    <div className={styles.budgetSmallInfo}>
                                        <p className={styles.total}>Total: ${budget.max}</p>
                                        <p className={styles.currentAmount}>Current: ${calcCurrentAmount(budget)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.leftBottomContent}>
                    <button className={styles.addNewBudget}>New Budget</button>
                </div>
            </div>
            <div className={styles.rightSide}>
                <h1 className={styles.budgetTitle}>{currentBudget().title}</h1>
                <div className={styles.budgetDetails}>
                    <p className={styles.budgetTotal}>Total: ${currentBudget().max}</p>
                    <p className={styles.budgetCurrentAmount}>Currently At: ${calcCurrentAmount(currentBudget())}</p>
                </div>
                <div className={styles.budgetItems}>
                    <div className={styles.itemsTopSection}>
                        <div className={styles.itemsTitleWrapper}>
                            <h1 className={styles.itemsTitle}>Items</h1>
                            <button className={styles.addItemButton}>New Item</button>
                        </div>
                        <div className={styles.items}>
                            {currentBudget().items.map(item => {
                                return (
                                    <div className={styles.item} onclick={() => {setSelectedItem(item); setAmount(item.amount); setUnitPrice(item.cost)}}>
                                        <p className={styles.itemText}>{item.name} x {item.amount}: ${item.amount * item.cost}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={styles.itemBottomSection}>

                        <Show when={selectedItem()}>
                            <div className={styles.selectedItem}>
                                <div className={styles.selectedItemTopSection}>
                                    <h2 className={styles.selectedItemTitle}>{selectedItem().name}</h2>
                                    <button className={styles.deleteItemButton}>Delete</button>
                                </div>
                                <div className={styles.selectedItemBottomSection}>
                                    <div className={styles.itemInputWrapper}>
                                        <Input value={unitPrice} setValue={setUnitPrice} title="Unit Price"/>
                                    </div>
                                    <div className={styles.itemInputWrapper}>
                                        <Input value={amount} setValue={setAmount} title="Number Of Items"/>
                                    </div>
                                </div>
                            </div>

                        </Show>

                    </div>
                </div>
            </div>
        </div>

    )

}