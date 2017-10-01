# UniverseReminder
A small tool help reminder time, todo, task, schedule by fancy voice in mac

### Setup

Change permistion for time.sh file:
```
chmod +x time.sh
```

Add cronjob:
```
crontab -e
 */5 * * * * ~/Code/mactalk/time.sh
```

### Check voice available in mac
ls /System/Library/Speech


### Feature is plainning