import { assert } from 'chai';

class Helpers {

    elementsVisible(array){
        array.map( el => 
            it(el, function () {
                let element = $(el).isDisplayed();
                assert.isTrue(element);
              })
        )
    }



}

export default new Helpers();