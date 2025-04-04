# timer

The idea is simple. I need a timer. As an input (number of seconds).

It seems that using man, I conclude that 'clock(3)' uses more cpu-power than 'sleep(3)'.

There are two programs to measure time:
- `timer` which uses `clock()`, and
- `timsleep` which uses `sleep()`.

Fire one at a time and check CPU usage with `(h)top`.

# Example of use

```
$ # 15 minutes = 60 seconds * 15
$ time ./timer `echo $((60*15))`
Time's up!
   14m59.41s real     9m02.73s user     5m57.27s system
$
```
