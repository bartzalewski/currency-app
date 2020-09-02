<template>
  <div class="container">
    <div class="top">
      <h1 data-aos="fade-up">Follow your favourite exchange rates!</h1>
      <p data-aos="fade-up" data-aos-delay="200" class="quote">
        <q>Hard work beats talent every time</q> - Jordan Belfort
      </p>
    </div>
    <div class="list">
      <div data-aos="fade-up" data-aos-delay="400" class="list-flex">
        <h3>Favourites</h3>
        <button class="btn-rm-all" @click="deleteAllItems()">Remove all</button>
      </div>
      <div class="tiles tiles-favourites">
        <div
          class="tile tile-favourite"
          v-for="(item, index) in arr"
          :key="item.id"
        >
          <div class="tile-left">
            <span class="tile-code">{{ item.code }}</span>
            <span class="tile-currency">{{ item.currency }}</span>
          </div>
          <div class="tile-right">
            <span class="tile-mid">{{ item.mid }}</span>
            <font-awesome-icon
              @click="deleteItem(index)"
              icon="minus-circle"
              class="btn btn-remove"
            />
          </div>
        </div>
      </div>
      <h3 data-aos="fade-up" data-aos-delay="600">All</h3>
      <div data-aos="fade-up" data-aos-delay="800" class="tiles">
        <div v-for="tile in allCurrency" :key="tile.id" class="tile">
          <div class="tile-left">
            <span class="tile-code">{{ tile.code }}</span>
            <span class="tile-currency">{{ tile.currency }}</span>
          </div>
          <div class="tile-right">
            <span class="tile-mid">{{ tile.mid }}</span>
            <font-awesome-icon
              @click="addItem(tile)"
              icon="plus-circle"
              class="btn btn-add"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

let arr = [];

export default {
  name: 'Tiles',
  methods: {
    ...mapActions(['fetchTiles']),
    addItem(tile) {
      const updateTile = {
        currency: tile.currency,
        code: tile.code,
        mid: tile.mid,
      };

      arr.unshift(updateTile);
    },
    deleteItem(index) {
      if (confirm('Are you sure you want to remove it?')) {
        this.arr.splice(index, 1);
      } else {
        return null;
      }
    },
    deleteAllItems() {
      if (confirm('Are you sure you want to delete all items?')) {
        this.arr = [];
      } else {
        return null;
      }
    },
  },
  data() {
    return {
      arr,
    };
  },
  computed: mapGetters(['allCurrency']),
  created() {
    this.fetchTiles();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

$color-primary: #ff7e1f;
$color-secondary: #293247;
$color-tertiary: #495980;
$white: #fff;
$grey: #c0c0c0;
$font: 'Poppins';

* {
  box-sizing: border-box;
}

::selection {
  background: $color-primary;
  color: $white;
}

body::-webkit-scrollbar {
  width: 0.5em;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background: $color-primary;
  outline: 1px solid $white;
  border-radius: 1em;
}

body {
  background: $color-secondary;
  color: $white;
  font-family: $font;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

h1 {
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top {
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quote {
  margin: 0;
  color: $grey;
}

.list {
  max-width: 600px;
  width: 100%;

  &-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.tile {
  padding: 15px;
  width: 100%;
  height: 80px;
  background: $color-tertiary;
  border-radius: 4px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: 0.1s ease-in;

  &:hover {
    transform: scale(1.05);
    transition: 0.1s ease-in;
  }

  &-left {
    display: flex;
    flex-direction: column;
  }

  &-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &-code {
    font-size: 18px;
    font-weight: 500;
    color: $white;
  }

  &-currency {
    font-weight: 400;
    text-transform: capitalize;
    color: $grey;
  }

  &-mid {
    font-size: 18px;
    font-weight: 500;
    color: $white;
  }

  &-favourite {
    background: #ff7e1f;

    .tile-currency {
      color: $white;
    }
  }
}

.tiles-favourites {
  margin-bottom: 50px;
}

.btn {
  cursor: pointer;

  &-add {
    color: #52a635;
  }

  &-remove {
    color: red;
  }

  &-rm-all {
    background: none;
    color: $white;
    border: none;
    font-family: $font;
    cursor: pointer;
    outline: none;
    padding: 0;
  }
}

@media screen and (max-width: 700px) {
  .container {
    width: 95%;
  }
}
</style>
