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

CREATE TABLE Payments
(
	id BIGINT(20) PRIMARY KEY,
    ProjectExtId VARCHAR(255) NOT NULL,
    StripeId VARCHAR(255) NOT NULL,
    submittedAT DATETIME NOT NULL,
    processedAt DATETIME NOT NULL,
    amount FLOAT(8) NOT NULL,
    beforeBalance FLOAT(8) NOT NULL,
    afterBalance FLOAT(8) NOT NULL,
    paymentInfo VARCHAR(255) NOT NULL,
    autoPayment BOOL NOT NULL,
    client_email VARCHAR(255) NOT NULL,
    client_name VARCHAR(255),
    createdAt DATETIME,
    updatedAt DATETIME,
    modifiedBy JSON,
    version BIGINT(8)
);

CREATE TABLE Project_Details
(
	id BIGINT(20) PRIMARY KEY,
    projectExtId VARCHAR(255) NOT NULL,
    balance FLOAT(20) NOT NULL,
    marginUsdRate FLOAT(20) NOT NULL,
    reserveBalanceThreashold FLOAT(20) NOT NULL,
    balanceWarningThreshold FLOAT(20) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    modifiedBy JSON,
    version BIGINT(8)
);

CREATE TABLE Project_Client_Emails
(
	id BIGINT(20) PRIMARY KEY,
    projectExtId VARCHAR(255) NOT NULL,
    clientEmail VARCHAR(255) NOT NULL,
    clientName VARCHAR(255),
    createdAt DATETIME,
    updatedAt DATETIME,
    modifiedBy JSON,
    version BIGINT(8)
);

CREATE TABLE SMS 
(
	id BIGINT(20) PRIMARY KEY,
    extId VARCHAR(255) NOT NULL,
    usdCost FLOAT(20) NOT NULL,
    sentAt FLOAT(20) NOT NULL,
    providerExId VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    modifiedBy JSON,
    version BIGINT(8)
);

CREATE TABLE SMS_Rates 
(
	id BIGINT(20) PRIMARY KEY,
    providerExtId VARCHAR(255) NOT NULL,
    countryCode VARCHAR(3) NOT NULL,
	usdRate FLOAT(20) NOT NULL,
    localRate FLOAT(20) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    modifiedBy JSON,
    version BIGINT(8)
);