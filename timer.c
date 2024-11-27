#include <stdio.h>
#include <stdlib.h>     /* for atoi */
#include <time.h>

int main(int argc, char *argv[])
{
    if (argc != 2) {
        fprintf(stderr, "Sory, ale odwalasz kaszanke!\n");
        exit(1);
    }

    int seconds = atoi(argv[1]);
    while (seconds > 0) {
        int h = seconds / 3600;
        int m = (seconds % 3600) / 60;
        int s = seconds % 60;
        printf("\r%02d:%02d:%02d", h, m, s);
        fflush(stdout);
        clock_t stop = clock() + CLOCKS_PER_SEC;
        while (clock() < stop) {
            /*
             * clock() measures processor time used by my program. Also a program
             * does not use processor time while it is sleeping.
             */
            ;
        }
        seconds--;
    }

    printf("\rTime's up!\n");

    return 0;
}
