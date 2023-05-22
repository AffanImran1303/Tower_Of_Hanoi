function Tower_Hanoi(disks,source_rod,des_rod,aux_rod){
    if(disks===1){
        console.log("Move disk 1 from rod",source_rod,"to rod",des_rod);
        return;
    }
    Tower_Hanoi(disks-1,source_rod,aux_rod,des_rod);
    console.log("Move disk",disks,"from rod",source_rod,"to rod",des_rod);
    Tower_Hanoi(disks-1,aux_rod,des_rod,source_rod);
    
}
let disks=2;
Tower_Hanoi(disks,"A","B","C");
