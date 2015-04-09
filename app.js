var app = angular.module('wlSite', []);

app.controller('wlConfig', function($scope) {
    
    $scope.wl = {
        business: 'My App Company',
        introHeadline: 'Providing engaging apps to help move your business forward',
        logo: './images/logo-black@2x.png',
        plan1Price: '50',
        plan2Price: '75',
        plan3Price: '99',
        plan1Name: 'Plan 1',
        plan2Name: 'Plan 2', 
        plan3Name: 'Plan 3', 
        plan1Features: ['Feature 1', 'Feature 2', 'Feature 3' , 'Feature 4', 'Feature 5' , 'Feature 6'],
        plan2Features: ['Feature 1', 'Feature 2', 'Feature 3' , 'Feature 4', 'Feature 5' , 'Feature 6'],
        plan3Features: ['Feature 1', 'Feature 2', 'Feature 3' , 'Feature 4', 'Feature 5' , 'Feature 6'],
        googlePlay: 'http://google.com',
        appStore: 'http://apple.com',
        twitter: 'http://twitter.com',
        facebook: 'http://facebook.com',
        googlePlus: 'http://google.com'
    }
    
})