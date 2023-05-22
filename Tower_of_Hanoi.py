def Tower_Hanoi(disks,source,dest,aux):
    if(disks==1):
        print('Disk no.',disks,'moved from',source,'to',dest)
        return
    Tower_Hanoi(disks-1,source,aux,dest)
    print('Disk no.',disks,'moved from',source,'to',dest)
    Tower_Hanoi(disks-1,aux,dest,source)
Tower_Hanoi(3,'A','B','C')
