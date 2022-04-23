import React from "react";

const DaisyUiTable = () => {
  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Hart Hagerty</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span class="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://as1.ftcdn.net/v2/jpg/01/13/41/66/500_F_113416666_a7CuS6cvc6D5P5ezUbsTMexJHm9iAgga.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Brice Swyre</div>
                    <div class="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>Red</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://cdn3.vectorstock.com/i/1000x1000/52/07/girl-avatar-icon-cartoon-style-vector-8105207.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Marjy Ferencz</div>
                    <div class="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span class="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Crimson</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* <!-- row 4 --> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://cdn1.vectorstock.com/i/1000x1000/53/45/profile-icon-male-emotion-avatar-man-cartoon-vector-15175345.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Yancy Tear</div>
                    <div class="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span class="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          {/* <!-- foot --> */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DaisyUiTable;
