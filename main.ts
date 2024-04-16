#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const CurrentBalance = 25000;
const YourPinNumber = 3366;
const newPinCode = '';

//  const UpdatedBalance = ("" );


console.log((chalk.bold.red("\t ***********\tyour Current Balance is ************** \t\n" + CurrentBalance)));
// chalkAnimation.rainbow('\t\tWelcome to ATM Machine\t\t');
const getPinResult = await inquirer.prompt([{
    type: "number",
    name: "pin",
    message: "Please Enter Your Pin",
},
]);
    if (getPinResult.pin === YourPinNumber) {
    console.log((chalk.bold.green("\tYour Pin is correct.\t ")));
        let PerformOperations = await inquirer.prompt([
            {
            name: "operations",
            message: "Please select your operation",
            type: "list",
            choices: ["Withdraw", "Deposit", "Balance","changePinCode","fundTransfer", "Exit"],
            }]);

            if (PerformOperations.operations === "Withdraw") {
            let withdrawAmount =await inquirer.prompt([
                {
                name: "Amount",
                message: "Please Enter Amount for withdraw",
                type: "number",
            }
            ]); 
            console.log(chalk.bold.yellow("\t################\tYour Withdraw Amount is\t#################\t " + withdrawAmount.Amount));
            console.log(chalk.bold.blue("\tYour Current Balance is\t " + (CurrentBalance - withdrawAmount.Amount)));

            } else if (PerformOperations.operations === "Deposit") {
                 let depositAmount =await inquirer.prompt([
                {
                name: "Amount",
                message: "Please Enter Amount for Deposit",
                type: "number",
                }
            ]);
            console.log(chalk.bold.gray("\tYour Deposit Amount is\t " + depositAmount.Amount));
            console.log(chalk.bold.magentaBright("\tYour Current Balance is \t" + (CurrentBalance + depositAmount.Amount)));
            }
                else if(PerformOperations.operations === "changePinCode") {
                    let changePinCode =await inquirer.prompt([
                        {
                        name: "newPin",
                        message: "Please Enter New Pin Code",
                        type: "number",
                        }
                    ]);
                    console.log(chalk.bold.cyanBright("\tYour New Pin Code is\t " + changePinCode.newPin));
                    console.log(chalk.bold.greenBright("\tYour Pin Code is Changed Successfully.\t"));
            }
            //fund transfer
            else if (PerformOperations.operations === "fundTransfer") {
                let fundTransfer = await inquirer.prompt([
                    {
                        name: "amount",
                        message: "Please Enter Amount for fundTransfer",
                        type: "number",
                    }
                ]);
                console.log(chalk.bold.red("\tYour fundTransfer Amount is\t " + fundTransfer.amount));
                console.log(chalk.bold.yellow("\tYour Current Balance is\t " + (CurrentBalance - fundTransfer.amount)));
            }
            //bill payment for 

                else if (PerformOperations.operations === "Balance") {
                console.log(chalk.bold.green("\t Your Current Balance is \t" + CurrentBalance));

            }   else if (PerformOperations.operations === "Exit") {
                console.log(chalk.bold.red("\tThank you for using ATM Machine.\t"));
                process.exit(0);
                }
            }
            else {
        
                console.log(chalk.bold.red("\tYour Pin is Incorrect, Please give correct Pin Code.\t"));
            }
        