fucntion verifyKYC(user){
if (user.age>=18 && user.nid){
return {status: 'VERIFIED', riskLevel: 'LOW'};
}
return {status: 'REJECTED', riskLevel: 'HIGH'};
}
module.export={verifyKYC};
