export PATH := bin:node_modules/.bin:$(PATH)


build: node_modules

node_modules: package.json
	@npm install


# tasks
# -----

.PHONY: lint
lint:
	@jshint .

.PHONY: clean
clean:
	@rm -rf node_modules
