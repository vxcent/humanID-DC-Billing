USE billingdb

CREATE TABLE Balance_Logs 
(
	id bigint(20) PRIMARY KEY,
    projeectExtId varchar(255) NOT NULL,
    logType varchar(10) NOT NULL,
	date datetime NOT NULL,
    balance float(20) NOT NULL,
    numSms BIGINT(10) NOT NULL,
    reserveBalanceThreashold float(20) NOT NULL,
    balanceWarningThreashold float(20) NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    modifiedBy JSON,
    version BIGINT(8)
);

CREATE TABLE Bills 
(
	id BIGINT(20) PRIMARY KEY,
    projectEXtID VARCHAR(255) NOT NULL,
    date datetime NOT NULL,
    numSmsSent BIGINT(20) NOT NULL,
    totalSmsCost FLOAT(10) NOT NULL,
    marginCost FLOAT(10) NOT NULL,
    totalCost FLOAT(10) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    modifiedBy JSON,
    version BIGINT(8)
);
select * from Billing_DB
