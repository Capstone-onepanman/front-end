<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="orange"
          title="개인별 랭킹"
        >
          <v-data-table
            :headers="headers"
            :items="items"
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td class="text-xs-center">{{ item.ranking }}</td>
              <td>{{ item.nickName }}</td>
              <td width="250">{{ item.group }}</td>
              <td> 
                <v-layout row>
                  <v-flex>
                    <v-img src="Challenger.png" class="tier"/> {{ item.tier.Challenger }}
                  </v-flex>
                  <v-flex>
                    <v-img src="Platinum.png" class="tier"/> {{ item.tier.Platinum }}
                  </v-flex>
                  <v-flex>
                    <v-img src="Gold.png" class="tier"/> {{ item.tier.Gold }}
                  </v-flex>
                  <v-flex>
                    <v-img src="Silver.png" class="tier"/> {{ item.tier.Silver }}
                  </v-flex>
                  <v-flex>
                    <v-img src="Bronze.png" class="tier"/> {{ item.tier.Bronze }}
                    </v-flex>
                </v-layout>
              </td>  
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
      <v-flex
        md12
      >
        <material-card
          color="orange"
          width="500"
          title="Game 01"
        >
          <v-data-table
            :headers="headers2"
            :items="items.slice(0, 7)"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td class="text-xs-center">{{ item.ranking }}</td>
              <td>{{ item.nickName }}</td>
              <td>{{ item.group }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: true,
        text: 'Ranking',
        value: 'ranking',
        align: 'center',
        width: '300'
      },
      {
        sortable: false,
        text: 'Nick Name',
        value: 'nickName'
      },
      {
        sortable: false,
        text: 'Group',
        value: 'group'
      },
      {
        sortable: false,
        text: 'Tier',
        value: 'tier'
      }
    ],
    headers2: [
      {
        sortable: true,
        text: 'Ranking',
        value: 'ranking',
        align: 'center',
        width: '150'
      },
      {
        sortable: false,
        text: 'Nick Name',
        value: 'nickName'
      },
      {
        sortable: false,
        text: 'Group',
        value: 'group'
      }
    ],
    items: [
      {
        nickName: 'Dakota Rice',
        ranking: '1',
        group: 'Oud-Tunrhout',
        tier: {'Challenger': 5, 'Platinum': 5, 'Gold': 5, 'Silver': 5, 'Bronze': 5}
      },
      {
        nickName: 'Minerva Hooper',
        ranking: '3',
        group: 'Sinaai-Waas',
        tier: {'Challenger': 4, 'Platinum': 5, 'Gold': 5, 'Silver': 5, 'Bronze': 5}
      }, {
        nickName: 'Sage Rodriguez',
        ranking: '4',
        group: 'Overland Park',
        tier: {'Challenger': 3, 'Platinum': 5, 'Gold': 5, 'Silver': 5, 'Bronze': 5}
      }, {
        nickName: 'Philip Chanley',
        ranking: '2',
        group: 'Gloucester',
        tier: {'Challenger': 2, 'Platinum': 5, 'Gold': 5, 'Silver': 5, 'Bronze': 5}
      }, {
        nickName: 'Doris Greene',
        ranking: '5',
        group: 'Feldkirchen in Kārnten',
        tier: {'Challenger': 1, 'Platinum': 5, 'Gold': 5, 'Silver': 5, 'Bronze': 5}
      }, {
        nickName: 'Mason Porter',
        ranking: '6',
        group: 'Gloucester',
        tier: {'Challenger': 0, 'Platinum': 5, 'Gold': 5, 'Silver': 5, 'Bronze': 5}
      }
    ]
  })
}
</script>
<style>
.tier{
  left: -10px;
  width: 30px;
  height: 30px;
}
</style>