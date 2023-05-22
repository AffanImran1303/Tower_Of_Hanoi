# Tower_Of_Hanoi
A program which solves the mathematical puzzle, Tower of Hanoi.

What is Tower of Hanoi?
A mathematical puzzle which consists of 3 towers, and more than one rings. Rings are of different sizes and being stacked in ascending order.

Rules and Conditions:
Aim is to move all the disks to different tower.
- Only 1 disk to be moved at a time.
- Only the "Top" disk can be removed.
- Larger disk cannot sit on smaller disk.

Algorithm:
1) Mark the 3 towers with (source,destination,aux).
	1a) Here source is the tower on which the disks are already present.
	1b) Destination is the tower to which all the disks are to be shifted.
	1c) Aux is the tower only to be used for moving the disks.
2) First move the smaller disk from source to aux.
3) Now move the nth disk from source to the destination.
4) Move the (nth-1) disk from aux to destination.
