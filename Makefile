TARGET = daumdic.xpi

all: $(TARGET)

daumdic.xpi:
	zip -r $@ . -x@exclude.lst

clean:
	rm -f $(TARGET)
