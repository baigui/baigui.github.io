# Streaming

### ~ hint

Streaming is an optional feature and may not be enabled in this editor.

### ~

The PXT parses the log entry for numberial data. When it detects a data stream, it automatically starts 
collecting and aggregating it. The streamed data can then be download to a file or uploaded to the cloud (optional).

## Before starting... #setup

Make sure you follow the instructions on [how to setup a serial connection](/device/serial) with the @boardname@. 

## A typical scenario #example

A common scenario is to chart some sensor data, such as the acceleration, and analyse it in the editor. 
For example, run this code on your @boardname@.

```blocks
basic.forever(() => {
   led.plotBarGraph(input.acceleration(Dimension.X), 0);
});
```

If your serial connection is working, you will start to see a chart representing that acceleration ``x`` value read from the @boardname@.
Each time ``led.plotBarGraph`` is called, the value is also written to the serial output. The log view automatically detects 
that there is a data stream and displays a graph.

## Local download

The log view will automatically start to collect and organize the data it detects. Simply click on the log view to open the various options
to export the data. The simplest option is to download the data as a **CSV file**. This file can easily be opened in programs like Office Excel.

## Cloud upload via Azure 

Unsupported for now. This is in the feature backlog for the team.

### ~

