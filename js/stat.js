'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var FONT_SIZE = '16px';
var FONT_FAMILY = 'PT Mono';
var steep = 0;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderColumn = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderText = function (ctx, fontSize, fontFamily, x, y, text) {
  ctx.font = fontSize + ' ' + fontFamily;
  ctx.fillText(text, x, y);
};

var createSaturation;
createSaturation = function (max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  renderText(ctx, FONT_SIZE, FONT_FAMILY, 110, 50, 'Ура вы победили!');
  renderText(ctx, FONT_SIZE, FONT_FAMILY, 110, 70, 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (times[i] / maxTime) * MAX_BAR_HEIGHT;
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      renderText(ctx, FONT_SIZE, FONT_FAMILY, steep + BAR_WIDTH + CLOUD_X, CLOUD_HEIGHT - barHeight - 25, times[i]);
      renderColumn(ctx, steep + BAR_WIDTH + CLOUD_X, CLOUD_HEIGHT - barHeight - 20, BAR_WIDTH, barHeight, 'rgba(255, 0, 0, 1)');
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      renderText(ctx, FONT_SIZE, FONT_FAMILY, steep + BAR_WIDTH + CLOUD_X, CLOUD_HEIGHT, players[i]);
    } else {
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      renderText(ctx, FONT_SIZE, FONT_FAMILY, steep + BAR_WIDTH + CLOUD_X, CLOUD_HEIGHT - barHeight - 25, Math.round(times[i]));
      renderColumn(ctx, steep + BAR_WIDTH + CLOUD_X, CLOUD_HEIGHT - barHeight - 20, BAR_WIDTH, barHeight, 'hsl(240, ' + createSaturation(100, 0) + '%, 50%)');
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      renderText(ctx, FONT_SIZE, FONT_FAMILY, steep + BAR_WIDTH + CLOUD_X, CLOUD_HEIGHT, players[i]);
    }
    steep += 90;
  }
};


