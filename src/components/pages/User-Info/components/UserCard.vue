<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    elevation="20"
    width="520"
  >
    <v-card-title>
      <v-list-tile-avatar
        :size=130
        color="grey darken-3">
          <v-img
            class="elevation-6"
            src="favicon2.png"
          ></v-img>
        </v-list-tile-avatar>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      <form>
        <v-layout
          justify-space-between
          wrap
          align-center
          row>
          <div>Name:</div>
            <v-flex md4>
              <v-text-field
                v-model="Name"
                :error-messages="nameErrors"
                :counter="15"
                required
                @input="$v.Name.$touch()"
                @blur="$v.Name.$touch()"/>
              </v-flex>
        </v-layout>
      </form>
      <v-layout
          justify-space-between
          wrap
          align-center
          row>
        <div>Email:</div>
        <div>{{ Email }}</div>
      </v-layout>
      <v-layout
          justify-space-between
          wrap
          align-center
          row>
        <v-flex md4>
          <v-select
            :items="languages"
            label="Languages"
            single-line
            class="lang"/>
        </v-flex>
      </v-layout>
      <form>
        <v-layout
          justify-space-between
          wrap
          align-center
          row>
          <div>상태명:</div>
            <v-flex md6>
              <v-text-field
                v-model="message"
                :error-messages="messageErrors"
                :counter="20"
                @input="$v.message.$touch()"
                @blur="$v.message.$touch()"/>
              </v-flex>
        </v-layout>
      </form>
      <v-layout
        wrap
        justify-space-between
        row>
        <v-flex>
          Hearts: 
        </v-flex>
        <div
          v-for="(heart, i) in Hearts"
          :key=i>
          <v-icon color="pink">mdi-heart</v-icon>
        </div>
        <div
          v-for="(heart, i) in 5-Hearts"
          :key=i+5>
          <v-icon color="#696969">mdi-heart</v-icon>
        </div>
      </v-layout>
      <div>
        <v-switch
          v-model="isCodeOpen"
          color="pink"
          :label="`Code Open: ${isCodeOpen.toString()}`"/>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    Name: { required, maxLength: maxLength(15) },
    message: { required, maxLength: maxLength(20) }
  },
  data () {
    return {
      id: 1,
      Email: "algo@algo.com",
      Password: "algorithm",
      Name: "algo_king",
      Hearts: 3,
      isCodeOpen: false,
      message: "One Punch Man",
      languages: ['vue', 'javascript', 'python']
    }
  },
  computed: {
    nameErrors () {
        const errors = []
        if (!this.$v.Name.$dirty) return errors
        !this.$v.Name.maxLength && errors.push('15글자 이내로')
        !this.$v.Name.required && errors.push('이름은 쓰세요.')
        return errors
      },
    messageErrors () {
        const errors = []
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.maxLength && errors.push('20글자 이내로')
        return errors
      }
  },
  methods: {
      submit () {
        this.$v.$touch()
      }
    }
}
</script>

<style scoped>
.lang{
  max-width: 100px;
}
</style>