#include <stdio.h>
#include <stdlib.h>     /* for atoi */
#include <unistd.h>
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
        sleep(1);
        seconds--;
    }

    printf("\rTime's up!\n");

    return 0;
}
