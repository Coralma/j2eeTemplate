angular.module('sample.controller', [])
    .controller('SampleCtrl', ['$scope','Restangular', function ($scope, Restangular) {
        $scope.tabs = [
            {heading: '车型',id: 0, templateUrl: 'sample.vehicleType', visible: true},
            {heading: '配件',id: 1, templateUrl: 'part', visible: false},
            {heading: '工时',id: 2, templateUrl: 'laborHour', visible: false},
            {heading: '辅料',id: 3, templateUrl: 'material', visible: false}
        ];

        $scope.tabSelected = function(id) {
            console.log("selected tab : " + id);
        };

        $scope.gridOptions = {
            gridId : 'testGrid',
            enableOverflow : true,
            overflowHeight : '300px',
            paginationPageSizes: [50, 100, 150],
            paginationPageSize: 50,
            useExternalPagination: true,
            enableRowSelection: true,
            enableGridMenu: false,
            unitMessage: ' ',
            noDataMessage: '没有找到匹配的结果',
            onRegisterApi : function(gridApi){
                $scope.gridApi = gridApi;
            },
            columnDefs : [
                {displayName: 'ID', field:'id',enableSorting: true,cellStyle: "width:50px"},
                {displayName: '原始图号', field:'origImageFile',cellStyle: "width:120px"},
                {displayName: '原始图号名称', field:'origIMageName'},
                {displayName: '原始图中序号', field:'origImageSeq',cellStyle: "width:50px"},
                {displayName: '原始零件名称', field:'oripartNameEpc',cellStyle: "width:100px"},
                {displayName: '配件名称', field:'partName',cellStyle: "width:85px"},
                {displayName: '配件编号', field:'partCode',cellStyle: "width:110px"},
                {displayName: '总成', field:'category'},
                {displayName: '总成编码', field:'categoryCode'},
                {displayName: '用量', field:'maxQuantity'},
                {displayName: '4S店价', field:'price'},
                {displayName: '部位', field:'partLocation'},
                {displayName: '漆料颜色', field:'paintColor'},
                {displayName: '简略备注', field:'partRemark', cellStyle: "width:80px"},
                {displayName: '备注', field:'detailRemark',cellStyle: "width:100px"},
                {displayName: '供应商', field:'suppliersCode'},
                {displayName: '工种', field:'laborType'},
                {displayName: '喷漆', field:'paintFlag'},
                {displayName: '理赔玻璃', field:'glassFlag'},
                {displayName: '换修', field:'repairableFlag'},
                {displayName: '使用年限', field:'year'},
                {displayName: '配件拆分ID', field:'seqNo'}
            ]
        }
        $scope.gridOptions.totalItems = 201;

        $scope.submitData = function() {
            $scope.resultData = $scope.gridOptions.data;
            console.log(JSON.stringify($scope.gridOptions.data, null, '\t'));
            $('#bsGrid').fixedHeaderTable({ height: '300', altClass: 'odd', themeClass: 'fancyDarkTable', footer: true});
        }

        $scope.rowSelect = function(row) {
            console.log('run row select');
        }

        $scope.selectedRows = function() {
            var rows = $scope.gridApi.getSelectedRows();
            console.log(JSON.stringify(rows));
        }

        $scope.pageChange = function(pageIndex, pageSize) {
            console.log('The pageIndex is ' + pageIndex + ', pageSize is : ' + pageSize)
        }

        $scope.sortChange = function(pageIndex, pageSize, sortField, sortType) {
            console.log('The pageIndex is ' + pageIndex + ', pageSize is ' + pageSize + ", sortField is " + sortField + ", sortType is " + sortType);
        }


        Restangular.one('parts/middle/CN03620/pager/1').get().then(function (data) {
            console.log(JSON.stringify(data));
            console.log("array size is : " + data.length);
            $scope.gridOptions.data = data;
        });
    }]);