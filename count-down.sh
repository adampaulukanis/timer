#!/bin/ksh

# format_time has to do one job:
# input:
#   time in seconds, ex.: 15 minutes = 15 * 60 = 900 seconds
# output:
#   ex.: 14:32 time in this format: HH:MM:SS
format_time() {
    HH=$(( $1 / 3600 ))
    MM=$(( ($1 % 3600) / 60 ))
    SS=$(( $1 % 60 ))
    banner `printf "%.2d:%.2d:%.2d" $HH $MM $SS`
}

time=$1
while [[ $time -gt 0 ]]
do
    clear
    time=$((time-1))
    format_time $time
    sleep 1
done

# Print something at the end of the program
echo finished at `date`
