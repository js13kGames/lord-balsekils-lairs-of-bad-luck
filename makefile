JS = res/log.js res/sound.js res/generate-level.js res/canvas.js res/tile.js res/level.js res/dungeon.js res/monster-base.js res/monster.js res/player.js res/events.js res/game.js
GLOBAL = SPRITE_URL, log, sound, generateLevel, Canvas, Tile, Level, Dungeon, MonsterBase, Monster, Player, events

.PHONY: check
check: min/game.zip
	@echo
	@stat --printf="Current size: %s B (" min/game.zip && (echo "scale=2;" && stat --printf="%s" min/game.zip && echo "*100/(13*1024)") | bc -l | tr -d '\n' && echo " %)"

min/sprites.png: res/sprites.png
	cp res/sprites.png min/sprites.png
	optipng -o7 min/sprites.png

min/all.js: $(JS) min/sprites.png
	(echo "(function(){var $(GLOBAL);" && echo -n "SPRITE_URL = 'data:image/png;base64," && base64 -w0 min/sprites.png && echo "';" && cat $(JS) && echo "})()") > min/all.js

min/min.js: min/all.js
	minify-js min/all.js > min/min.js

#based on xem's mini minifier
min/min.css: res/game.css
	tr '\t\n\r' ' ' < res/game.css | sed -e's/\(\/\*[^*]\+\*\/\| \)\+/ /g' | sed -e's/^ \|\([ ;]*\)\([^a-zA-Z0-9:*.#"()% -]\)\([ ;]*\)\|\*\?\(:\) */\2\4/g' > min/min.css

min/index.html: min/min.js min/min.css index.html
	sed -f modify.sed index.html > min/index.html

min/game.zip: min/index.html
	cd min && zip -9 game.zip index.html

.PHONY: clean
clean:
	find . -name '*~' -delete
	rm min/all.js min/min.js min/min.css min/game.zip

.PHONY: lint
lint:
	jshint -a $(JS)
	jscs -a $(JS)