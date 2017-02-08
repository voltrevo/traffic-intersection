# traffic-intersection

Simulates a basic traffic intersection.

Here's some sample output... I hope this is right ;-)

```
andrew@Andrews-MacBook-Pro ~/w/t/traffic-intersection> node src/index.js
2017-02-08T19:41:13.096+11:00: NorthSouth change to red
2017-02-08T19:41:13.101+11:00: EastWest change to red
2017-02-08T19:41:16.078+11:00: change!
2017-02-08T19:41:16.083+11:00: NorthSouth change to green
2017-02-08T19:41:25.736+11:00: change!
2017-02-08T19:41:25.740+11:00: NorthSouth change to amber
2017-02-08T19:41:26.479+11:00: change!
2017-02-08T19:41:26.483+11:00: NorthSouth change to green
2017-02-08T19:41:34.506+11:00: change!
2017-02-08T19:41:34.509+11:00: NorthSouth change to amber
2017-02-08T19:41:36.511+11:00: NorthSouth change to red
2017-02-08T19:41:38.513+11:00: EastWest change to green
2017-02-08T19:41:41.164+11:00: change!
2017-02-08T19:41:41.167+11:00: EastWest change to amber
2017-02-08T19:41:43.171+11:00: EastWest change to red
2017-02-08T19:41:44.720+11:00: change!
2017-02-08T19:41:44.723+11:00: EastWest change to green
2017-02-08T19:41:47.081+11:00: change!
2017-02-08T19:41:47.083+11:00: EastWest change to amber
2017-02-08T19:41:49.089+11:00: EastWest change to red
2017-02-08T19:41:51.093+11:00: NorthSouth change to green
2017-02-08T19:41:53.923+11:00: change!
2017-02-08T19:41:53.926+11:00: NorthSouth change to amber
2017-02-08T19:41:55.879+11:00: change!
2017-02-08T19:41:55.882+11:00: NorthSouth change to green
2017-02-08T19:42:01.206+11:00: change!
2017-02-08T19:42:01.209+11:00: NorthSouth change to amber
2017-02-08T19:42:03.214+11:00: NorthSouth change to red
2017-02-08T19:42:04.617+11:00: change!
2017-02-08T19:42:04.621+11:00: NorthSouth change to green
2017-02-08T19:42:05.195+11:00: change!
2017-02-08T19:42:05.198+11:00: NorthSouth change to amber
2017-02-08T19:42:05.841+11:00: change!
2017-02-08T19:42:05.844+11:00: NorthSouth change to green
2017-02-08T19:42:12.704+11:00: change!
2017-02-08T19:42:12.708+11:00: NorthSouth change to amber
2017-02-08T19:42:13.252+11:00: change!
2017-02-08T19:42:13.256+11:00: NorthSouth change to green
2017-02-08T19:42:20.222+11:00: change!
2017-02-08T19:42:20.224+11:00: NorthSouth change to amber
2017-02-08T19:42:22.228+11:00: NorthSouth change to red
2017-02-08T19:42:22.963+11:00: change!
2017-02-08T19:42:22.967+11:00: NorthSouth change to green
2017-02-08T19:42:27.853+11:00: change!
2017-02-08T19:42:27.856+11:00: NorthSouth change to amber
2017-02-08T19:42:29.861+11:00: NorthSouth change to red
2017-02-08T19:42:31.865+11:00: EastWest change to green
2017-02-08T19:42:36.532+11:00: change!
2017-02-08T19:42:36.534+11:00: EastWest change to amber
2017-02-08T19:42:38.539+11:00: EastWest change to red
2017-02-08T19:42:40.545+11:00: NorthSouth change to green
2017-02-08T19:42:43.448+11:00: change!
2017-02-08T19:42:43.451+11:00: NorthSouth change to amber
2017-02-08T19:42:45.109+11:00: change!
2017-02-08T19:42:45.113+11:00: NorthSouth change to green
2017-02-08T19:42:54.861+11:00: change!
2017-02-08T19:42:54.863+11:00: NorthSouth change to amber
2017-02-08T19:42:56.840+11:00: change!
2017-02-08T19:42:56.842+11:00: NorthSouth change to green
2017-02-08T19:42:59.256+11:00: change!
2017-02-08T19:42:59.259+11:00: NorthSouth change to amber
2017-02-08T19:43:01.260+11:00: NorthSouth change to red
2017-02-08T19:43:03.261+11:00: EastWest change to green
2017-02-08T19:43:06.031+11:00: change!
2017-02-08T19:43:06.034+11:00: EastWest change to amber
2017-02-08T19:43:08.037+11:00: EastWest change to red
2017-02-08T19:43:10.042+11:00: NorthSouth change to green
2017-02-08T19:43:14.756+11:00: change!
2017-02-08T19:43:14.757+11:00: NorthSouth change to amber
2017-02-08T19:43:16.459+11:00: change!
2017-02-08T19:43:16.462+11:00: NorthSouth change to green
2017-02-08T19:43:26.360+11:00: change!
2017-02-08T19:43:26.364+11:00: NorthSouth change to amber
2017-02-08T19:43:27.652+11:00: change!
2017-02-08T19:43:27.655+11:00: NorthSouth change to green
2017-02-08T19:43:33.341+11:00: change!
2017-02-08T19:43:33.344+11:00: NorthSouth change to amber
2017-02-08T19:43:35.345+11:00: NorthSouth change to red
2017-02-08T19:43:37.346+11:00: EastWest change to green
2017-02-08T19:43:40.504+11:00: change!
2017-02-08T19:43:40.508+11:00: EastWest change to amber
2017-02-08T19:43:40.620+11:00: change!
2017-02-08T19:43:40.622+11:00: EastWest change to green
2017-02-08T19:43:49.750+11:00: change!
2017-02-08T19:43:49.753+11:00: EastWest change to amber
2017-02-08T19:43:51.754+11:00: EastWest change to red
2017-02-08T19:43:53.757+11:00: NorthSouth change to green
2017-02-08T19:43:57.942+11:00: change!
2017-02-08T19:43:57.945+11:00: NorthSouth change to amber
2017-02-08T19:43:59.946+11:00: NorthSouth change to red
2017-02-08T19:44:01.952+11:00: EastWest change to green
2017-02-08T19:44:04.013+11:00: change!
2017-02-08T19:44:04.015+11:00: EastWest change to amber
2017-02-08T19:44:06.020+11:00: EastWest change to red
2017-02-08T19:44:08.024+11:00: NorthSouth change to green
```
