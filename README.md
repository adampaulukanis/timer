# timer

The idea is simple. I need a timer. As an input number of seconds.
If I need minutes, or hours, simple math will help: `60 [ * <0-60> (minutes) [ * <0-60> (hours)]]`.

It seems that using `clock()` uses more cpu-power than sleep.

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
